import React from "react";
import { Slider, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import './productFilter.css'

export default function productFilter() {
    const marks = [
        {
            value: 0,
            label: '6m',
        },
        {
            value: 50,
            label: '12m',
        },
        {
            value: 100,
            label: '18m',
        }
    ];
    return (
        <Grid>
            <Grid container className="cat-grey-box mt-3 ml-10">
                <div class="text-uppercase">
                    Choose Rental Tenure
               </div>
                <Slider
                    defaultValue={50}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={50}
                    marks={marks}
                    min={0}
                    max={100}
                />
            </Grid>
            <Grid container className="cat-grey-box mt-3 ml-10">
                <div class=" text-uppercase">
                    Product Type
                </div>
                <FormControl component="fieldset" >
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox value="gilad" />}
                            label="Refridgerator"
                        />
                        <FormControlLabel
                            control={<Checkbox value="jason" />}
                            label="Air Conditioner"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox value="antoine" />
                            }
                            label="Television"
                        />
                    </FormGroup>
                </FormControl>
            </Grid>
            <Grid container className="cat-grey-box mt-3 ml-10">
                <div class=" text-uppercase">
                    Availability
                </div>
                <FormControl component="fieldset" >
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox value="gilad" />}
                            label="Exclude Out Of Stock"
                        />
                    </FormGroup>
                </FormControl>
            </Grid>
        </Grid>
    )
}