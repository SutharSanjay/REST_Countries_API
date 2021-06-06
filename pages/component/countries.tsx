import {TableContainer,Table,TableHead,TableCell,TableRow,TableBody} from '@material-ui/core';
import React, { useEffect, useState } from "react"
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from 'react-redux';
import { setcountries } from '../../redux/action/countries_actions';
import axios from 'axios';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

export default function Countries(){
    
        const countries = useSelector((state) => state.allCountries.countries);
        const dispatch = useDispatch()
        
        const fetchingcountries = async ()=>{
            const response = await axios.get("https://restcountries.eu/rest/v2/all").catch((err)=>{console.log(err)})
            dispatch(setcountries(response.data))
        }
        const [value, setValue] = useState('')
        const [namesort, setnamesort] = useState("")

        useEffect(() => {
            fetchingcountries();
        }, [setcountries])

        const requestSearch = () => {
            var filteredRows1 = countries.filter((row) => {
                console.log(value)
            return row.name.toLowerCase().includes(value.toLowerCase());
          });
            console.log(value)
            if(value.length <= 2){
                fetchingcountries();
            }
            else{
                dispatch(setcountries(filteredRows1))
            }
        };

        const handlechange = (event) => {
            setValue(event.target.value)
            requestSearch()
            
        } 

        const list = countries.map((countrie,index)=>{
            const {name,population,area,flag,capital,callingCodes} = countrie
            return(
                <TableBody className="table_body">
                    <TableRow className="table_row" >
                        <TableCell align="center">{index+1}</TableCell>
                        <TableCell align="center">
                            <img className="image" src={flag}></img>
                        </TableCell>
                        <TableCell align="center">{name}</TableCell>
                        <TableCell align="center">{population}</TableCell>
                        <TableCell align="center">{area || "Null"}</TableCell>
                        <TableCell align="center">+{callingCodes || "Null"}</TableCell>
                        <TableCell align="center">{capital || "Null"}</TableCell>
                    </TableRow>
                </TableBody>)
            })

        const handlenamesort=()=>{
            const desname= countries.reverse()
            dispatch(setcountries(desname))
            setnamesort("4")
        }
        const handlePopulationACS = () =>{
            const sortbyname = countries.sort((a, b) => (a.population > b.population) ? 1 : (a.population === b.population) ? ((a.population > b.population) ? 1 : -1) : -1 )
            dispatch(setcountries(sortbyname))
            setnamesort("1")
        }
        const handleAreaACS = () =>{
            const sortbyname = countries.sort((a, b) => (a.area > b.area) ? 1 : (a.area === b.area) ? ((a.area > b.area) ? 1 : -1) : -1 )
            dispatch(setcountries(sortbyname))
            setnamesort("2")
        }
        const handleCallingACS = () =>{
            const sortbyname = countries.sort((a, b) => (a.callingCodes > b.callingCodes) ? 1 : (a.callingCodes === b.callingCodes) ? ((a.callingCodes > b.callingCodes) ? 1 : -1) : -1 )
            dispatch(setcountries(sortbyname))
            setnamesort("3")
        }

    return(
        <>  <div className="search">
                <input
                type="text"
                value={value}
                onChange={handlechange}
                className="search_input"
                placeholder="Search…"
                />
                <div >
                <SearchIcon className="search_icon" />
                </div>
            </div>
                <TableContainer >
                <Table aria-label="simple table">
                <TableHead >
                    <TableRow className="detail_row">
                    <TableCell align="center">No</TableCell>
                    <TableCell align="center">Flag</TableCell>
                    <TableCell className="sort" onClick={handlenamesort} align="center">Name<ExpandLessIcon  /></TableCell>
                    <TableCell className="sort" onClick={handlePopulationACS} align="center">Population<ExpandLessIcon /></TableCell>
                    <TableCell className="sort" onClick={handleAreaACS} align="center">Area<ExpandLessIcon  /></TableCell>
                    <TableCell className="sort" onClick={handleCallingACS} align="center">CallingCodes<ExpandLessIcon  /></TableCell>
                    <TableCell align="center">Capital</TableCell>
                    </TableRow>
                </TableHead>
                {list}
                </Table>
            </TableContainer>
        </>
    )
}