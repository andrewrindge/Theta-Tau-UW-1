import {
    useColorMode,
    useColorModeValue,
    IconButton,
    IconButtonProps
} from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>

export default function ColorModeSwitcher(data: ColorModeSwitcherProps) {
    const { toggleColorMode } = useColorMode()
    const text = useColorModeValue('dark', 'light')
    const SwitchIcon = useColorModeValue(FaMoon, FaSun)

    return (
        <IconButton
            size='sm'
            fontSize='lg'
            variant='ghost'
            color='current'
            marginLeft='2'
            onClick={toggleColorMode}
            icon={<SwitchIcon />}
            aria-label={`Switch to ${text} mode`}
            {...data}
        />
    )
}