import React, { useState, useEffect } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import axios from 'axios';


const columns = [
        {
          field: "id", 
          headerName: "Id",
          headerClassName : "px-3 py-3 bg-amber-800 text-white  shadow-lg",
          width: 70,
          renderCell: (params) => {
                        return (
                                <>
                                        <div className=" h-full w-full">
                                         {params.value}
                                        </div>
                                </>
                        );
                },
        },
	{ 
          field: "pName", 
          headerName: "Project Name",
          width: 200,
          headerClassName : "px-3 py-3 bg-amber-800 text-white shadow-lg",
          renderCell: (params) => {
                        return (
                                <>
                                        <div className=" h-full w-full">                         
                                         {params.value}
                                        </div>
                                </>
                        );
                },
        },
        { field: "desc", headerName: "Description", width: 300 ,
          headerClassName : "px-6 py-3 bg-amber-800 text-white shadow-lg",
        renderCell: (params) => {
                        return (
                                <>
                                        <div className=" h-full w-full">
                                         {params.value}
                                        </div>
                                </>
                        );
                },
        },
	{ field: "stack", headerName: "Tech Stack", width: 500,
          headerClassName : "px-3 py-3 bg-amber-800 text-white shadow-lg",
          renderCell: (params) => {
                        const tStack = params.value.split(',')
                        return (
                                <div className="flex flex-wrap">
                                      {tStack.map((st, index) => (
                                        <div className="h-1/8 p-4 m-1 bg-amber-600 text-white rounded-full">
                                            {st}
                                        </div>
                                      ))}
                                </div>
                        );
                },
        },
	{
		field: "size",
		headerName: "Size",
		width: 70,
                headerClassName : "px-3 py-3 bg-amber-800 text-white shadow-lg",
		renderCell: (params) => {
			return (
				<>
					<div className="h-full w-full">{params.value}</div>
				</>
			);
		},
	},
        {       
                field: "role",
                headerName: "Role",
                width: 170,
                headerClassName : "px-6 py-3 bg-amber-800 text-white shadow-lg",
                renderCell: (params) => {
                        return (
                                <>
                                        <div className="h-full w-full">{params.value}</div>
                                </>
                        );
                },
        },
        {       
                field: "responsibilities",
                headerName: "Responsibilities",
                width: 700,
                headerClassName : "px-3 py-3 bg-amber-800 text-white shadow-lg",
                renderCell: (params) => {
                        return (
                                <>
                                        <div className="h-full w-full">{params.value}</div>
                                </>
                        );
                },
        }
];


export default function Work() {
        
        const [row, setRow] = useState([]);

        useEffect(() => {
             axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
             axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
             axios.get('http://localhost:5002/wd/details')
             .then(json => {
                   console.log(json.data)
                   setRow(json.data)
              })
             .catch(error => console.error(error));
         }, []);


        /*return (
                  <div id="work" style={{ height: "100%", width: "100%" }}>
                      {row?.map((data) => { 
                        return ( 
                            <div key={data.id}> 
                                <h1>{data.pName}</h1> 
                            </div> 
                        ); 
                       }) 
                     }  
                 </div>
             );*/        

	return (
		<div id="work" style={{ height: "100%", width: "100%" }} className="w-full h-screen bg-gradient-to-b
                        from-white to-gray-400">
			<DataGrid rows={row} columns={columns} getRowHeight={() => 'auto'} getRowClassName={(params) => {
                                console.log(params)
                                return params.row.id%2 == 0 ? "bg-gradient-to-b from-white to-gray-400 text-wrap" : "";
                         }}
                   />
		</div>
	);
}

