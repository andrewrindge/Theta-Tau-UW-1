import { Stack, useToast, Text, HStack, Input, Textarea, FormControl, FormLabel, FormErrorMessage, Button } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { Controller, FormProvider, FieldError, useForm } from "react-hook-form"

interface ContactForm {
    name: string
    email: string
    message: string
}

export default function ContactForm() {

    const toast = useToast()
    const successToast = useToast()

    const [displaySubmitShortcut, setDisplaySubmitShortcut] = useState<boolean>(false)

    const methods = useForm<ContactForm>({
        mode: 'onChange',
        defaultValues: {
            name: '',
            email: '',
            message: ''
        }
    })

    const onSubmit = (data: ContactForm) => {
        if (data) {
            toast({
                title: JSON.stringify(data),
                status: 'success',
                duration: 3000
            })
            successToast({
                position: 'top',
                title: 'Message Received!',
                status: 'success',
                duration: 5000,
                isClosable: true
            })
        } else {
            toast({
                title: JSON.stringify(data),
                status: 'error',
                duration: 3000
            })
        }
    }


    const { handleSubmit, watch, control, reset, formState: { isSubmitSuccessful } } = methods

    useEffect(() => {
        reset({
            name: '',
            email: '',
            message: ''
        }, {
            keepIsValid: true
        })
    }, [isSubmitSuccessful, reset])

    const watchTextArea = watch('message')

    return (

        <Stack width='100%' alignItems='center' paddingBottom='50px'>
            <Stack width={{ base: '90%', md: '75%', lg: '50%' }}>
                <Stack padding='25px 0px' fontSize='36px' fontWeight={600}>
                    <Text>Contact Us</Text>
                </Stack>
                <FormProvider {...methods}>
                    <form
                        onSubmit={(event) => {
                            (handleSubmit(onSubmit))(event)
                        }}
                        onKeyDown={(event) => {
                            if (event.shiftKey && event.key === 'Enter') {
                                (handleSubmit(onSubmit))(event)
                            }
                        }}
                    >
                        <HStack>
                            <Controller
                                control={control}
                                name='name'
                                rules={{
                                    validate: (data: string) => {
                                        if (data.length === 0) return 'Name required'
                                        return true
                                    }
                                }}
                                render={({ field: { onChange, value }, fieldState: { error } }) => (
                                    <FormControl isInvalid={!!error}>
                                        <Stack height='120px'>
                                            <FormLabel>Name</FormLabel>
                                            <Input onChange={onChange} value={value} />
                                            <FormErrorMessage>
                                                <Text>{(error as FieldError)?.message}</Text>
                                            </FormErrorMessage>
                                        </Stack>
                                    </FormControl>
                                )}
                            />
                            <Controller
                                control={control}
                                name='email'
                                rules={{
                                    validate: (data: string) => {
                                        const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                        if (data.length === 0) return 'Email required'
                                        else if (!emailRegex.test(data)) return 'Invalid Email'
                                        return true
                                    }
                                }}
                                render={({ field: { onChange, value }, fieldState: { error } }) => (
                                    <FormControl isInvalid={!!error}>
                                        <Stack height='120px'>
                                            <FormLabel>Email</FormLabel>
                                            <Input onChange={onChange} value={value} type='email' />
                                            <FormErrorMessage>
                                                <Text>{(error as FieldError)?.message}</Text>
                                            </FormErrorMessage>
                                        </Stack>
                                    </FormControl>
                                )}
                            />
                        </HStack>
                        <Controller
                            control={control}
                            name='message'
                            rules={{
                                validate: (data: string) => {
                                    if (data.length == 0) return 'Message cannot be empty'
                                    if (data.length > 1024) return `Exceeded max character length`
                                    return true
                                }
                            }}
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <FormControl isInvalid={!!error}>
                                    <FormLabel>Message</FormLabel>
                                    <Textarea
                                        onChange={onChange}
                                        value={value}
                                        onFocus={() => setDisplaySubmitShortcut(true)}
                                        onBlur={() => setDisplaySubmitShortcut(false)}
                                    />
                                    <HStack
                                        display='flex'
                                        alignItems='center'
                                        justifyContent={error || displaySubmitShortcut ? 'space-between' : 'flex-end'}
                                    >
                                        <FormErrorMessage>
                                            <Text fontSize='15px'>{(error as FieldError)?.message}</Text>
                                        </FormErrorMessage>
                                        {!error && displaySubmitShortcut && (
                                            <Stack paddingTop='10px'>
                                                <Text fontSize='13px' fontWeight={500} fontStyle='italic'>
                                                    Shift + Enter to submit
                                                </Text>
                                            </Stack>
                                        )}
                                        <Stack paddingTop='10px'>
                                            <Text
                                                textAlign='right'
                                                color={error ? 'tomato' : '#000'}
                                                fontSize='15px'
                                            >
                                                {watchTextArea.length}/1024 characters
                                            </Text>
                                        </Stack>
                                    </HStack>
                                </FormControl>
                            )}
                        />
                        <Stack alignItems='flex-end' padding='20px 0px'>
                            <Button
                                type='submit'
                                width='fit-content'
                            >
                                Submit
                            </Button>
                        </Stack>
                    </form>
                </FormProvider>
            </Stack>
        </Stack>

    )
}