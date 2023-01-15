import { useState, useCallback, useLayoutEffect, useEffect } from "react";
import { BoundingRect } from "../types";

const debounce = (limit: number, callback: () => void) => {
    let timeoutId: null | number;
    return (...args: any[]) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(callback, limit, args);
    };
};

function getDimensionObject(node: Element): BoundingRect {
    const rect = node.getBoundingClientRect();
    return {
        width: rect.width,
        height: rect.height,
        top: rect.top,
        left: rect.left,
        x: rect.x,
        y: rect.y,
        right: rect.right,
        bottom: rect.bottom
    };
}

export default function useBoundingRect(limit: number | null = null):
    [ref: (node: HTMLDivElement | null) => void, dimensions: BoundingRect, node: Element | null] {
    const [dimensions, setDimensions] = useState<BoundingRect>({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        x: 0,
        y: 0,
        right: 0,
        bottom: 0
    });
    const [node, setNode] = useState<null | Element>(null);

    const ref = useCallback((node: HTMLDivElement | null) => {
        setNode(node);
    }, []);

    useEffect(() => {
        if ("undefined" !== typeof window && node) {
            const measure = () =>
                window.requestAnimationFrame(() =>
                    setDimensions(getDimensionObject(node))
                );

            measure();

            const listener = debounce(limit ? limit : 100, measure);

            window.addEventListener("resize", listener);
            window.addEventListener("scroll", listener);
            return () => {
                window.removeEventListener("resize", listener);
                window.removeEventListener("scroll", listener);
            };
        }
    }, [node, limit]);

    return [ref, dimensions, node];
}
