const Nav=()=>{
    return(
        <nav style={{
            background: "linear-gradient(90deg, #2c3e50 0%, #3498db 100%)", 
            minHeight: "80px", 
            display: "flex", 
            alignItems: "center",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
            position: "sticky",
            top: 0,
            zIndex: 1000,
            width: "100%",
            left: 0,
            boxSizing: "border-box"
        }}>
            <ol style={ListStyle.outerlist}>
                <li style={ListStyle.list}>Home</li>
                <li style={ListStyle.list}>Services</li>
                <li style={ListStyle.list}>About</li>
                <li style={ListStyle.list}>Search</li>
            </ol>
        </nav>
    );
};

const ListStyle={
    list:{
        backgroundColor:"rgba(255, 255, 255, 0.1)",
        color: "#ffffff",
        padding:"calc(8px + 0.5vw) calc(15px + 1vw)",
        fontSize:"clamp(12px, 2vw, 16px)",
        fontWeight:"600",
        borderRadius:"25px",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        margin:"8px",
        flex: "1",
        textAlign: "center",
        cursor: "pointer",
        textTransform: "uppercase",
        letterSpacing: "1px"
    },
    outerlist:{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-evenly",
        alignItems:"center",
        width:"100%",
        maxWidth: "1200px",
        padding:"10px 20px",
        margin:"0 auto",
        listStyle:"none"
    }
}
export default Nav;