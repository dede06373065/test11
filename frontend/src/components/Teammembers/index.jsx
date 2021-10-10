import React from 'react'
import styled from 'styled-components'
import { useState,useEffect } from 'react'
import { Link,Route } from 'react-router-dom'
import { Pagination } from 'antd'
import '../../../node_modules/antd/dist/antd.css'
import './teammembers.css'
import Detail from '../Detail'

const Content = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center`;

const List = styled.div`
width:250px;
margin:15px;
text-align:center;
`;

const Avatar = styled.img`
border-radius:100%;
border:5px solid white`;

const Name = styled.h4`
margin-top:20px;`;

const City = styled.p`
margin:0;
color:rgb(162,162,162);`;

const Email = styled.p`
font-style: italic;
color:blue;
text-decoration:underline;
font-size:0.7rem;`;

const Teammembers = (props) => {
    const staff = props.personObj
    const [params,setParams] = useState({
        current:1,
        total:20,
        size:8
    })

    const handleChange = (e) => {
        setParams({current:e,total:20,size:8})

    }

    useEffect(()=>{
        props.getData(params)
    },[params])

    return (
        <>{
            staff?(
                <Content>{
                    staff.map((item,index)=>{
                        return(
                            <List key={index}>
                                <div className="flip-container" onTouchStart={()=>{this.classList.toggle('hover')}}>
                                    <div className="flipper">
                                        <div className="front">
                                        <Avatar src={item.picture} alt="avatar" />
                                        </div>
                                        <div className="back">
                                            <h4>Hi~<span className="red">❤</span></h4>
                                            <p className="username">{item.username}</p>
                                        </div>
                                    </div>
                                </div>
                                <Name>{item.first} {item.last}</Name>
                                <City>{item.city}</City>
                                <Email>{item.email}</Email>
                                <Link to={`/detail/${item.first}/${item.city}`}  className="more">VIEW DETAILS ＞</Link>
                            </List>
                        )
                    })
                }
            <Route path="/detail/:name/:city" component={Detail} />
        </Content>
        ):'Loading...'}
        <div className="pagination">
            <Pagination total={params.total} current={params.current} onChange={handleChange} defaultPageSize={params.size}/>
        </div>
        </>
    )
}

export default Teammembers;
