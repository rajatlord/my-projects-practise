
const Box = ({render})=>{
    return <div style={{padding:"20px",border :"2px dashed black" }}>{render()}</div>
};

function Render(){
    return(
        <Box render={()=><h1>Hello this is in Box</h1>}/>
    )
}

export default Render;