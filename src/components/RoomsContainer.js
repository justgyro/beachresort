import React from 'react';
import RoomFilter from './RoomFilter';
import RoomsList from './RoomsList';
import { withRoomConsumer } from '../Context';
import Loading from './Loading';


function RoomContainer({context}) {
  const {loading, sortedRooms, rooms} = context
  if(loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomFilter rooms={rooms}/>
      <RoomsList rooms={sortedRooms}/>
    </>
  )
}

export default withRoomConsumer(RoomContainer)

















/*import RoomFilter from './RoomFilter';
import RoomsList from './RoomsList';
import { RoomConsumer } from '../Context';
import Loading from './Loading';
import


export default function RoomsContainer(){
  return (
    <RoomConsumer>
       {
         value => {
           const { loading, sortedRooms, rooms } = value
           if(loading) {
             return <Loading />;
           }
           return (
             <div>
               Hello from Rooms Container
               <RoomFilter rooms={rooms}/>
               <RoomsList rooms={sortedRooms}/>
             </div>
           );
         }
       }
    </RoomConsumer>

  )
}*/
