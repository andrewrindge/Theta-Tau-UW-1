import { Stack } from "@chakra-ui/react"
import { ContainerProps } from '../../lib/types'

export default function Container({ children, padding, p }: ContainerProps) {
    const everything = padding ? padding : (p ? p : '0px 20px')

    return (
        <Stack padding={everything}>
            {children}
        </Stack>
    )
}