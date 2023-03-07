import React from "react"
import { useLocation, useParams } from 'react-router-dom'

export default function Demo(props) {
    console.log('useLocation---', useLocation()) 
    console.log('useParams---', useParams()) 
    return <div>Demo</div>
}