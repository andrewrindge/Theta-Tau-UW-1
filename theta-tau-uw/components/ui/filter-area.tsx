import { Checkbox, CheckboxGroup, FormLabel, Input, InputGroup, Select, Stack, Text } from "@chakra-ui/react";

export default function FilterArea() {
    return (
        <Stack borderLeft='1px solid #000' padding='10px'>
            <Text fontWeight={700} fontSize='28px'>Filter By</Text>
            <Stack padding='10px' gap='25px'>
                <Stack>
                    <CheckboxGroup>
                        <Checkbox value="all">Actives</Checkbox>
                        <Checkbox value="active">Alumni</Checkbox>
                    </CheckboxGroup>
                </Stack>
                <Stack>
                    <Text fontWeight={600} fontSize='18px'> Graduation Date</Text>
                    <InputGroup flexDirection='column'>
                        <FormLabel>From</FormLabel>
                        <Input type='date' />
                    </InputGroup>
                    <InputGroup flexDirection='column'>
                        <FormLabel>To</FormLabel>
                        <Input type='date' />
                    </InputGroup>
                </Stack>
                <Stack>
                    <Text fontWeight={600} fontSize='18px'>Class</Text>
                    <Select>
                        <option value="all">All</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </Select>
                </Stack>
            </Stack>
        </Stack>
    )
}