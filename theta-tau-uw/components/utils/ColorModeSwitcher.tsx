import {
    useColorMode,
    useColorModeValue,
    IconButton,
    IconButtonProps,
    Image,
    Stack,
    Button
} from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'
import ThetaTau from '../img/ThetaTau.png'

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
            backgroundImage={`url${ThetaTau}`}
            aria-label={`Switch to ${text} mode`}
            {...data}
        />
    )
}