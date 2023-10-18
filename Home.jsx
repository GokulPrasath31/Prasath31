import React from 'react'
import 
{ BsCashCoin, BsListCheck, BsWalletFill, BsBagCheckFill,BsArrowUp,BsArrowDown}
 from 'react-icons/bs'
 import 
 { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie,Cell } 
 from 'recharts';

function Home() {

    const data = [
        {
          name: 'Jan',
          Previousyear:3000,
          Currentyear: 4000,
          NewCustomer: 2400,
        },
        {
          name: 'Feb',
          Previousyear:2400,
          Currentyear: 3000,
          NewCustomer: 2210,
        },
        {
          name: 'Mar',
          Previousyear:1800,
          Currentyear: 2000,
          NewCustomer: 2290,
        },
        {
          name: 'Apr',
          Previousyear:3600,
          Currentyear: 2780,
          NewCustomer: 2000,
        },
        {
            name: 'May',
            Previousyear:3698,
            Currentyear: 4200,
            NewCustomer:3030,
        },
        {
          name: 'Jun',
          Previousyear:3200,
          Currentyear: 1890,
          NewCustomer: 2181,
        },
        {
          name: 'Jul',
          Previousyear:3641,
          Currentyear: 2390,
          NewCustomer: 2500,
        },
        {
          name: 'Aug',
          Previousyear:2800,
          Currentyear: 3490,
          NewCustomer: 2100,
        },
        {
            name: 'Sept',
            Previousyear:1687,
            Currentyear: 3000,
            NewCustomer:2400,
        },
        {
            name: 'Oct',
            Previousyear:2000,
            Currentyear: 2600,
            NewCustomer: 3000,
        },
        {
            name: 'Nov',
            Previousyear:1200,
            Currentyear: 2900,
            NewCustomer: 3600, 
        },
        {
            name: 'Dec',
            Previousyear:3200,
            Currentyear: 4600,
            NewCustomer: 4400,
        },
    ];
  

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>Hello Gokul</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                <h3>Earnings</h3>
                    <BsCashCoin className='card_icon'/>
                </div>
                <h1>$300k</h1>
                <div>
                    <BsArrowUp className='card_icon'/><h4> 37.8% this month</h4>
                    
                </div>
                
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Orders</h3>
                    <BsListCheck className='card_icon'/>
                </div>
                <h1>$4.5k</h1>
                <BsArrowDown className='card_icon'/>
                <h4>3% this month</h4>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Balance</h3>
                    <BsWalletFill className='card_icon'/>
                </div>
                <h1>$3.4k</h1>
                <BsArrowDown className='card_icon'/>
                <h4>3% this month</h4>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Total Sales</h3>
                    <BsBagCheckFill className='card_icon'/>
                </div>
                <h1>$90k</h1>
                <BsArrowUp className='card_iner'/>
                <h4>11% this week</h4>
            </div>
        </div>

        <div className='charts'>
        <h1>overview</h1>
        <h4>Monthly Earnings</h4>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={600}
            height={300}
            data={data}
            margin={{
                top: 6,
                right: 30,
                left: 20,
                bottom: 6,
            
            }}
            
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Previousyear" fill="#8884d8" />
                <Bar dataKey="Currentyear" fill="#82ca9d" />
                <Bar dataKey="NewCustomer" fill="#FF8042"/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    </main>
  )
}

export default Home