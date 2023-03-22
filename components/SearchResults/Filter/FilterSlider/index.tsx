'use client';

import { FilterCondition } from "@/types/Filter";
import { calculateStepValue, convertNumberToTwoDecimals } from "@/utils/Numbers";
import { SliderUnstyled, sliderUnstyledClasses } from "@mui/base";
import { ReactNode, SyntheticEvent, useState } from "react";
import styles from "./FilterSlider.module.scss";

interface FilterSliderProps {
    name: string;
    index: number;
    field: string;
    title: string;
    value: [number, number];
    currentValue: any;
    minMax: [number, number];
    onAdd: (newCriteria: any) => void;
    onRemove: (idToRemove: string) => void;
}

const css = `
    .slider {
        color: #20b2aa;
        width: 100%;
        height: 10px;
        display: inline-block;
        position: relative;
        cursor: pointer;
        touch-action: none;
        opacity: 0.8;
        -webkit-tap-highlight-color: transparent;
        transition: opacity 0.2s;
    }

    .slider:hover {
        opacity: 1;
    }

    .slider .${sliderUnstyledClasses.rail} {
        display: block;
        position: absolute;
        width: 100%;
        height: 4px;
        border-radius: 2px;
        background-color: black;
        opacity: 0.5;
    }

    .slider .${sliderUnstyledClasses.track} {
        display: block;
        position: absolute;
        height: 4px;
        border-radius: 2px;
        background-color: black;
    }

    .slider .${sliderUnstyledClasses.thumb} {
        position: absolute;
        width: 16px;
        height: 16px;
        margin-left: -4px;
        margin-top: -7px;
        box-sizing: border-box;
        border-radius: 50%;
        outline: 0;
        background-color: #732c2f;
    }

    .slider .${sliderUnstyledClasses.thumb}:last-of-type {
        margin-left: -14px;
        margin-top: -7px;
    }

    .slider .label {
        background: unset;
        background-color: #3c3c3c;
        display: flex;
        padding: .5rem;
        visibility: hidden;
        color: #fff;
        border-radius: .5rem;
        position: absolute;
        transform: translate(-35%, -140%) scale(0);
        transition: transform 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
    }

    .slider:hover .label {
        visibility: visible;
        transform: translate(-35%, -140%) scale(1);
    }

    .slider:hover .value {
        text-align: center;
    }

`

const SliderValueLabel = ({ children }: { children: ReactNode }) => {
    return (
      <span className="label">
        <div className="value">{children}</div>
      </span>
    );
}

const FilterSlider = (props: FilterSliderProps) => {
    const [value, setValue] = useState<number[]>(Array.isArray(props.currentValue) ? props.currentValue : props.value);
    const minDistance = props.minMax[0] / 10;
    const id = props.name + props.index;
    const stepValue = calculateStepValue(props.minMax[0], props.minMax[1]);

    const onChange = (event: Event, newValue: number | number[], activeThumb: number) => {
        if (!Array.isArray(newValue)) return;    
        if (activeThumb === 0) {
            setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
            setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }
    }

    const onChangeCommited = (event: Event | SyntheticEvent<Element, Event>, value: number | number[]) =>{
        if (!Array.isArray(value)) return; 
        if (value[0] === props.minMax[0] && value[1] === props.minMax[1]) {
            props.onRemove(id);
        } else {
            props.onRemove(id);
            props.onAdd({
                id: id,
                name: props.name,
                field: props.field,
                value: value as [number, number],
                type: "range"
            } satisfies FilterCondition)
        }
    }

    return (
        <div className={styles.wrapper}>
            <style type="text/css">{css}</style>
            <div className={styles.inner}>
                <SliderUnstyled 
                    className="slider"
                    value={value}
                    min={props.minMax[0]}
                    max={props.minMax[1]}
                    onChange={onChange}
                    step={stepValue}
                    slots={{ valueLabel: SliderValueLabel }}
                    valueLabelFormat={(value) => `${convertNumberToTwoDecimals(value)} ${props.title}`}
                    disableSwap
                    onChangeCommitted={onChangeCommited}
                />
            </div>
        </div>
    )
}

export default FilterSlider