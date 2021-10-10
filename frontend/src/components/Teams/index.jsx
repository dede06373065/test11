import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import styled from 'styled-components'
import Teammembers from '../Teammembers'

const Content = styled.div`
margin:30px;
padding:20px;
`;

const Teams = () => {
    const [personObjs,setPerson] = useState([])
    let params = {
        current: 1,
        total: 20,
        size: 8
    }
    const getData = (params) =>{
        axios.get('http://localhost:3006/api/staff?size=' + params.size + '&current=' + params.current).then((res)=>{
            const persons = res.data[0]
            let newpersons = []
            for(let i in persons){
                newpersons.push({
                    first:persons[i].name.first,
                    last:persons[i].name.last,
                    email:persons[i].email,
                    picture:persons[i].picture.large,
                    city:persons[i].location.city,
                    username:persons[i].login.username,
                    lat:persons[i].location.coordinates.latitude,
                    lon:persons[i].location.coordinates.longitude,
                    zone:persons[i].location.timezone.offset
                })
            }
            setPerson(newpersons)
        }).catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        getData(params)
    },[])

    return (
        <Content>
            <Teammembers personObj={personObjs} getData={getData}/>
        </Content>
    )
}

export default Teams;

