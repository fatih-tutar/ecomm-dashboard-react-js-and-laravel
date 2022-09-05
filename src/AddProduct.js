import Header from "./Header"
import { useState } from 'react'
function AddProduct(){
    const [name,setName]=useState("");
    const [file,setFile]=useState("");
    const [price,setPrice]=useState("");
    const [description,setDescription]=useState("");
    
    async function addProduct()
    {
        console.warn(name,file,price,description)
        const formData = new FormData();
    
        formData.append('name',name);
        formData.append('file',file);
        formData.append('price',price);
        formData.append('description',description);
    
        await fetch("http://localhost:8000/api/addproduct",{
            method: 'POST',
            body: formData
        });
        alert("Data has been saved.");
    }
    
    return(
        <div>
            <Header/>
            <div className="col-sm-6 offset-sm-3">
                <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} style={{'margin-top':'10px'}} placeholder="Name"/>
                <input type="file" className="form-control" onChange={(e) => setFile(e.target.files[0])} style={{'margin-top':'10px'}} placeholder="File"/>
                <input type="text" className="form-control" onChange={(e) => setPrice(e.target.value)} style={{'margin-top':'10px'}} placeholder="Price"/>
                <input type="text" className="form-control" onChange={(e) => setDescription(e.target.value)} style={{'margin-top':'10px'}} placeholder="Description"/>
                <button onClick={addProduct} className="btn btn-primary mt-2">Add Product</button>
            </div>
        </div>
    )
}

export default AddProduct