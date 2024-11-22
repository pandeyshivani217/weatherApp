import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1562155955-1cb2d73488d7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SE9UJTIwV0VBVEhFUnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1687265051328-3d9c67034cef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q09MRCUyMFdFQVRIRVJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=1024x1024&w=is&k=20&c=U6uwI27fEfgEAl9j_Hz848FgLRidd9Ww0kPCkc0FZB8=";
    return(
        <div className="InfoBox">
            
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia 
                sx={{ height: 140 }}
                image={
                    info.humidity>80
                    ?RAIN_URL
                    :info.temp>15
                    ?HOT_URL
                    :COLD_URL
                }
                title="green iguana"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}{
                        info.humidity>80
                        ?<ThunderstormIcon/>
                        :info.temp>15
                        ?<WbSunnyIcon/>
                        :<AcUnitIcon/>
                    }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                     <p>Temperature:{info.temp}&deg;C</p>
                     <p>Humidity:{info.humidity}</p>
                     <p>Min Temperature:{info.tempMin}&deg;C</p>
                     <p>Max Temperature:{info.tempMax}&deg;C</p>
                     <p>The Weather is described as <i>{info.weather}</i> and FeelsLike:{info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
                
            </Card>
            </div>
            
        </div>
    )
}