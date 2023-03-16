import {Avatar} from "@mui/material";

export default function MuiComponent() {

return (
    <div style = {{display:'flex',justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    margin: '1rem 0'}}>
<Avatar alt="Remy Sharp" src="https://picsum.photos/200/300" />
<Avatar alt="Travis Howard" src="https://picsum.photos/200" />
<Avatar alt="Cindy Baker" src="https://picsum.photos/200/" />

    </div>
)

}

