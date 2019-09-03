import React, { Component, useEffect, useState} from 'react'
import {DataView, DataViewLayoutOptions} from 'primereact/dataview';
import initialMembers from "../members";




export default function Home () {
    const[totalBounties, setTotalBounties] = useState(0);


    useEffect(() => {
        const filteredMembers = initialMembers.map(m => m.bounty); //all bounties
        setTotalBounties(filteredMembers.reduce((a,c)=> a + c)); //sum of all bounties
        memberTemplate = memberTemplate.bind(filteredMembers);
    }, [])

    function memberTemplate(member) {
        return (
            <div className="p-col-12 p-md-3">
                <div><h2>{member.name}</h2></div>
                <div>
                    <p>Bounty: {member.bounty}</p>
                    <p>Age: {member.age}</p>
                </div>
            </div>
        );
    }

    return (
        <div >

            <h2>You are Home!</h2>

            <DataView value={initialMembers} layout="grid" itemTemplate={memberTemplate}></DataView>

            
        </div>
    )
}