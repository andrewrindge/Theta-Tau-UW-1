import { Controller, useForm, FormProvider, FieldError } from 'react-hook-form';
import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    HStack,
    Input,
    Select,
    Stack,
    Text,
    Textarea,
    useToast
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import TitleDivider from '../ui/title-divider';


// to send mail, use nodemailer

interface FormValues {
    first_name: string;
    last_name: string;
    uwEmail: string;
    year: string;
    optionalMessage: string;
}

export default function InterestForm() {
    const [shortCut, setShortCut] = useState<boolean>(false);
    const [textLength, setTextLength] = useState<number>(0);

    const methods = useForm<FormValues>({
        mode: 'onBlur',
        defaultValues: {
            first_name: '',
            last_name: '',
            uwEmail: '',
            year: '',
            optionalMessage: ''
        }
    })

    const { control, watch, handleSubmit, reset, formState: { isSubmitSuccessful } } = methods

    useEffect(() => {
        reset({
            first_name: '',
            last_name: '',
            uwEmail: '',
            year: '1',
            optionalMessage: ''
        }, {
            keepIsValid: true
        })

    }, [isSubmitSuccessful, reset])

    const toast = useToast()

    const onSubmit = (data: FormValues) => {
        /**
         *  Later, we will make a POST request to mongodb to check if the user has submitted
         *  less than 3 forms within the past 6 hours. If this criteria is met, we will send
         *  the success toast. Otherwise, we will send the error toast.
         */

        if (data) {
            toast({
                title: JSON.stringify(data),
                status: 'success',
                duration: 5000,
                isClosable: true
            })
        } else {
            toast({
                title: JSON.stringify(data),
                status: 'error',
                duration: 5000,
                isClosable: true
            })
        }
    }

    const watchTextArea = watch('optionalMessage')

    return (
        <Stack width='100%' alignItems='center' gap={6} paddingTop='50px'>
            <TitleDivider
                title='Interested?'
                render={<></>}
            />
            <Stack width='80%' gap='20px'>
                <Text fontWeight={700} fontSize='36px' textAlign='left' padding='10px' background='#FDFDFD'>
                    Fill Out Our Interest Form!
                </Text>
            </Stack>
            <Stack width='75%'>
                <FormProvider {...methods}>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        onKeyDown={(event) => {
                            if (event.shiftKey && event.key === 'Enter') {
                                handleSubmit(onSubmit)(event)
                            }
                        }}
                    >
                        <Stack width='100%' alignItems='center' gap={8}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                width={{
                                    base: '100%',
                                    md: '75%',
                                    lg: '60%'
                                }}
                            >
                                <Controller
                                    name='first_name'
                                    control={control}
                                    rules={{
                                        validate: async (data) => {
                                            if (data.length < 2) return 'First name must be at least 2 characters long.';
                                            return true
                                        }
                                    }}

                                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                                        <FormControl isInvalid={!!error}>
                                            <FormLabel htmlFor='first_name' fontSize='18px' fontWeight={600}>First Name</FormLabel>
                                            <Input
                                                name='first_name'
                                                type='text'
                                                onChange={onChange}
                                                value={value}
                                            />
                                            <Stack width='100%'>
                                                <FormErrorMessage>
                                                    <Text>{(error as FieldError)?.message}</Text>
                                                </FormErrorMessage>
                                            </Stack>
                                        </FormControl>
                                    )}
                                />
                                <Controller
                                    name='last_name'
                                    control={control}
                                    rules={{
                                        validate: (data) => {
                                            if (data.length < 2) return 'Last name must be at least 2 characters long.'
                                            return true
                                        }
                                    }}
                                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                                        <FormControl isInvalid={!!error}>
                                            <FormLabel htmlFor='last_name' fontSize='18px' fontWeight={600}>Last Name</FormLabel>
                                            <Input
                                                name='last_name'
                                                type='text'
                                                onChange={onChange}
                                                value={value}
                                            />
                                            <Stack width='100%'>
                                                <FormErrorMessage>
                                                    <Text>{(error as FieldError)?.message}</Text>
                                                </FormErrorMessage>
                                            </Stack>
                                        </FormControl>
                                    )}
                                />
                            </Stack>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                width={{
                                    base: '100%',
                                    md: '75%',
                                    lg: '60%'
                                }}
                            >
                                <Controller
                                    name='uwEmail'
                                    control={control}
                                    rules={{
                                        validate: (data) => {
                                            const whiteListedDomains = ['uw.edu', 'u.washington.edu']
                                            const domain = data.split('@')[1]

                                            if (!(whiteListedDomains.includes(domain))) return 'Must be email assigned by UW (uw.edu or u.washington.edu).'
                                            return true
                                        }
                                    }}
                                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                                        <FormControl isInvalid={!!error}>
                                            <FormLabel htmlFor='uwEmail' fontSize='18px' fontWeight={600}>
                                                UW Email
                                            </FormLabel>
                                            <Input
                                                name='uwEmail'
                                                type='email'
                                                onChange={onChange}
                                                value={value}
                                            />
                                            <Stack width='100%'>
                                                <FormErrorMessage>
                                                    <Text>{(error as FieldError)?.message}</Text>
                                                </FormErrorMessage>
                                            </Stack>
                                        </FormControl>
                                    )}
                                />
                                <Controller
                                    name='year'
                                    control={control}
                                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                                        <FormControl isInvalid={!!error}>
                                            <FormLabel htmlFor='uwEmail' fontSize='18px' fontWeight={600}>
                                                Year
                                            </FormLabel>
                                            <Select
                                                onChange={onChange}
                                                value={value}
                                            >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4+">4+</option>
                                            </Select>
                                            <Stack width='100%' alignItems='flex-end'>
                                                <FormErrorMessage>
                                                    <Text>{(error as FieldError)?.message}</Text>
                                                </FormErrorMessage>
                                            </Stack>
                                        </FormControl>
                                    )}
                                />
                            </Stack>
                            <Stack
                                width={{
                                    base: '100%',
                                    md: '75%',
                                    lg: '60%'
                                }}
                            >
                                <Controller
                                    name='optionalMessage'
                                    control={control}
                                    rules={{
                                        validate: (data: string) => {
                                            if (data.length > 1024) return 'Message too long'
                                            return true
                                        }
                                    }}
                                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                                        <FormControl isInvalid={!!error && !(+textLength > 1024)}>
                                            <FormLabel htmlFor='optionalMessage' fontSize='18px' fontWeight={600}>
                                                Message <em style={{ fontWeight: 500, color: '#8F8F8F' }}>(optional)</em>
                                            </FormLabel>
                                            <Textarea
                                                onChange={(event) => {
                                                    onChange(event)
                                                    setTextLength(event.currentTarget.value.length)
                                                }}
                                                placeholder="Tell us your major, what you're looking for, etc."
                                                value={value}
                                                onMouseEnter={() => setShortCut(true)}
                                                onFocus={() => setShortCut(true)}
                                                onBlur={() => setShortCut(false)}
                                                onMouseLeave={() => setShortCut(false)}
                                            />
                                            <HStack
                                                display='flex'
                                                alignItems='center'
                                                justifyContent={error || shortCut ? 'space-between' : 'flex-end'}
                                            >
                                                <FormErrorMessage>
                                                    <Text fontSize='15px'>{(error as FieldError)?.message}</Text>
                                                </FormErrorMessage>
                                                {!error && shortCut && (
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
                            </Stack>
                        </Stack>
                    </form>
                </FormProvider>
            </Stack>
        </Stack>
    )
}