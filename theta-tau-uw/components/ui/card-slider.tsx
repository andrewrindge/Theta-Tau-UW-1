/**
 * author: Neil Morgan | https://github.com/neil-morgan
 */

import {
    HStack,
    IconButton,
    Stack,
    Text,
    Flex,
    Box,
    VStack,
    Button,
    Progress,
    useMediaQuery
} from '@chakra-ui/react';
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { DraggableInfo } from '../../lib/types';
import {
    useLayoutEffect,
    useCallback,
    useEffect,
    useState,
    useMemo,
    useRef,
    Children,
    Dispatch,
    SetStateAction,
    KeyboardEventHandler
} from 'react'
import useBoundingRect from '../../lib/hooks/useBoundingRect';
import percentage from '../../lib/utils/percentage';
import { motion, useAnimation, useMotionValue } from 'framer-motion';

const MotionFlex = motion(Flex)

const transitionProps = {
    stiffness: 400,
    type: "spring",
    damping: 60,
    mass: 3
};

interface Props {
    children: React.ReactNode
    gap: number
}

export default function CardSlider({ children, gap }: Props) {
    const [trackIsActive, setTrackIsActive] = useState(false);
    const [multiplier, setMultiplier] = useState(0.35);
    const [sliderWidth, setSliderWidth] = useState(0);
    const [activeItem, setActiveItem] = useState(0);
    const [constraint, setConstraint] = useState(0);
    const [itemWidth, setItemWidth] = useState(0);

    const initSliderWidth = useCallback((width: number) => setSliderWidth(width), []);

    const positions = useMemo(
        () => Children.toArray(children).map((_, index) => -Math.abs((itemWidth + gap) * index)),
        [children, itemWidth, gap]
    );
    const [isBetweenBaseAndMd] = useMediaQuery(
        `(min-width: 0em) and (max-width: 46.25em)`
    );

    const [isBetweenMdAndXl] = useMediaQuery(
        `(min-width: 46.25em) and (max-width: 78.125em)`
    );

    const [isGreaterThanXL] = useMediaQuery(`(min-width: 78.125em)`);

    useEffect(() => {
        if (isBetweenBaseAndMd) {
            setItemWidth(sliderWidth - gap);
            setMultiplier(0.65);
            setConstraint(1);
        }
        if (isBetweenMdAndXl) {
            setItemWidth(sliderWidth / 2 - gap);
            setMultiplier(0.5);
            setConstraint(2);
        }
        if (isGreaterThanXL) {
            setItemWidth(sliderWidth / 3 - gap);
            setMultiplier(0.35);
            setConstraint(3);
        }
    }, [isBetweenBaseAndMd, isBetweenMdAndXl, isGreaterThanXL, sliderWidth, gap]);
    const sliderProps = {
        setTrackIsActive,
        initSliderWidth,
        setActiveItem,
        activeItem,
        constraint,
        itemWidth,
        positions,
        gap
    };

    const trackProps = {
        setTrackIsActive,
        trackIsActive,
        setActiveItem,
        sliderWidth,
        activeItem,
        constraint,
        multiplier,
        itemWidth,
        positions,
        gap
    };

    const itemProps = {
        setTrackIsActive,
        trackIsActive,
        setActiveItem,
        activeItem,
        constraint,
        itemWidth,
        positions,
        gap
    };
    return (
        <Stack width='100%' alignItems='center' padding='40px 0px'>
            <Text fontSize='48px' fontWeight={700}>See What's New</Text>
            <Stack width='85%'>
                <Stack>
                    {/* <IconButton
                        aria-label='view more cards on the left'
                        icon={<IoMdArrowBack />}
                    /> */}
                    <Slider {...sliderProps}>
                        <Track {...trackProps}>
                            {Children.toArray(children).map((child, index) => (
                                <Item key={index} index={index} {...itemProps}>
                                    {child}
                                </Item>
                            ))}
                        </Track>
                    </Slider>
                    {/* <IconButton
                        aria-label='view more cards on the right'
                        icon={<IoMdArrowForward />}
                    /> */}
                </Stack>

            </Stack>
        </Stack>
    );
};

const Slider = ({
    setTrackIsActive,
    initSliderWidth,
    setActiveItem,
    activeItem,
    constraint,
    itemWidth,
    positions,
    children,
    gap
}: {
    setTrackIsActive: Dispatch<SetStateAction<boolean>>
    initSliderWidth: (width: number) => void
    setActiveItem: Dispatch<SetStateAction<number>>
    activeItem: number
    constraint: number
    itemWidth: number
    positions: number[]
    children: React.ReactNode
    gap: number
}) => {
    const [ref, { width }] = useBoundingRect();


    useLayoutEffect(() => initSliderWidth(Math.round(width)), [
        width,
        initSliderWidth
    ]);

    const handleFocus = () => setTrackIsActive(true);

    const handleDecrementClick = () => {
        setTrackIsActive(true);
        !(activeItem === positions.length - positions.length) &&
            setActiveItem((prev) => prev - 1);
    };

    const handleIncrementClick = () => {
        setTrackIsActive(true);
        !(activeItem === positions.length - constraint) &&
            setActiveItem((prev) => prev + 1);
    };

    return (
        <>
            <Box
                ref={ref}
                w={{ base: "100%", md: `calc(100% + ${gap}px)` }}
                ml={{ base: 0, md: `-${gap / 2}px` }}
                px={`${gap / 2}px`}
                position="relative"
                overflow="hidden"
                _before={{
                    bgGradient: "linear(to-r, base.d400, transparent)",
                    position: "absolute",
                    w: `${gap / 2}px`,
                    content: "''",
                    zIndex: 1,
                    h: "100%",
                    left: 0,
                    top: 0
                }}
                _after={{
                    bgGradient: "linear(to-l, base.d400, transparent)",
                    position: "absolute",
                    w: `${gap / 2}px`,
                    content: "''",
                    zIndex: 1,
                    h: "100%",
                    right: 0,
                    top: 0
                }}
            >
                {children}
            </Box>
            <Stack>
                <Flex w={`${itemWidth}px`} mt={`${gap / 2}px`} mx="auto">
                    <Button
                        onClick={handleDecrementClick}
                        onFocus={handleFocus}
                        mr={`${gap / 3}px`}
                        color="gray.200"
                        variant="link"
                        minW={0}
                    >
                        <ChevronLeftIcon boxSize={9} />
                    </Button>

                    <Progress
                        value={percentage(activeItem, positions.length - constraint)}
                        alignSelf="center"
                        borderRadius="2px"
                        bg="base.d100"
                        flex={1}
                        h="3px"
                        sx={{
                            "> div": {
                                backgroundColor: "colors.900"
                            }
                        }}
                    />

                    <Button
                        onClick={handleIncrementClick}
                        onFocus={handleFocus}
                        ml={`${gap / 3}px`}
                        color="gray.200"
                        variant="link"
                        zIndex={2}
                        minW={0}
                    >
                        <ChevronRightIcon boxSize={9} />
                    </Button>
                </Flex>
            </Stack>
        </>
    );
};

const Track = ({
    setTrackIsActive,
    trackIsActive,
    setActiveItem,
    activeItem,
    constraint,
    multiplier,
    itemWidth,
    positions,
    children
}: {
    setTrackIsActive: Dispatch<SetStateAction<boolean>>
    trackIsActive: boolean
    setActiveItem: Dispatch<SetStateAction<number>>
    activeItem: number
    constraint: number
    multiplier: number
    itemWidth: number
    positions: number[]
    children: React.ReactNode
    gap: number
}) => {
    const [dragStartPosition, setDragStartPosition] = useState(0);
    const controls = useAnimation();
    const x = useMotionValue(0);
    const node = useRef<HTMLDivElement>(null);

    const handleDragStart = () => setDragStartPosition(positions[activeItem]);

    const handleDragEnd = (_: any, info: DraggableInfo) => {
        const distance = info.offset.x;
        const velocity = info.velocity.x * multiplier;
        const direction = velocity < 0 || distance < 0 ? 1 : -1;

        const extrapolatedPosition =
            dragStartPosition +
            (direction === 1
                ? Math.min(velocity, distance)
                : Math.max(velocity, distance));

        const closestPosition = positions.reduce((prev, curr) => {
            return Math.abs(curr - extrapolatedPosition) <
                Math.abs(prev - extrapolatedPosition)
                ? curr
                : prev;
        }, 0);

        if (!(closestPosition < positions[positions.length - constraint])) {
            setActiveItem(positions.indexOf(closestPosition));
            controls.start({
                x: closestPosition,
                transition: {
                    velocity: info.velocity.x,
                    ...transitionProps
                }
            });
        } else {
            setActiveItem(positions.length - constraint);
            controls.start({
                x: positions[positions.length - constraint],
                transition: {
                    velocity: info.velocity.x,
                    ...transitionProps
                }
            });
        }
    };

    const handleResize = useCallback(
        () =>
            controls.start({
                x: positions[activeItem],
                transition: {
                    ...transitionProps
                }
            }),
        [activeItem, controls, positions]
    );

    const handleClick = useCallback(
        (event: MouseEvent) => {
            if (node.current) {
                node.current.contains(event.target as Node)
                    ? setTrackIsActive(true)
                    : setTrackIsActive(false)
            }
        },
        [setTrackIsActive]
    );

    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (trackIsActive) {
                if (activeItem < positions.length - constraint) {
                    if (event.key === "ArrowRight" || event.key === "ArrowUp") {
                        event.preventDefault();
                        setActiveItem((prev) => prev + 1);
                    }
                }
                if (activeItem > positions.length - positions.length) {
                    if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
                        event.preventDefault();
                        setActiveItem((prev) => prev - 1);
                    }
                }
            }
        },
        [trackIsActive, setActiveItem, activeItem, constraint, positions.length]
    );

    useEffect(() => {
        // handleResize(positions);
        handleResize()

        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("mousedown", handleClick);
        };
    }, [handleClick, handleResize, handleKeyDown, positions]);

    return (
        <>
            {itemWidth && (
                <VStack ref={node} spacing={5} alignItems="stretch">
                    <MotionFlex
                        dragConstraints={node}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        animate={controls}
                        style={{ x }}
                        drag="x"
                        _active={{ cursor: "grabbing" }}
                        minWidth="min-content"
                        flexWrap="nowrap"
                        cursor="grab"
                    >
                        {children}
                    </MotionFlex>
                </VStack>
            )}
        </>
    );
};

const Item = ({
    setTrackIsActive,
    setActiveItem,
    activeItem,
    constraint,
    itemWidth,
    positions,
    children,
    index,
    gap
}: {
    setTrackIsActive: Dispatch<SetStateAction<boolean>>
    setActiveItem: Dispatch<SetStateAction<number>>
    activeItem: number
    constraint: number
    itemWidth: number
    positions: number[]
    children: React.ReactNode
    index: number
    gap: number
}) => {
    const [userDidTab, setUserDidTab] = useState(false);

    const handleFocus = () => setTrackIsActive(true);

    const handleBlur = () => {
        userDidTab && index + 1 === positions.length && setTrackIsActive(false);
        setUserDidTab(false);
    };

    const handleKeyUp = (eventKey: string) =>
        eventKey === "Tab" &&
        !(activeItem === positions.length - constraint) &&
        setActiveItem(index);

    const handleKeyDown = (eventKey: string) => eventKey === "Tab" && setUserDidTab(true);

    return (
        <Flex
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyUp={(event) => handleKeyUp(event.key)}
            onKeyDown={(event) => handleKeyDown(event.key)}
            w={`${itemWidth}px`}
            _notLast={{
                mr: `${gap}px`
            }}
            py="4px"
        >
            {children}
        </Flex>
    );
};