import { Divider, Grid, IconButton, InputBase, Link, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from "react";
import axios from "axios";
// import 'dotenv/config'

const size = 150
// const BASE_URL = process.env.BASE_URL
// const SECRET_KEY = process.env.SECRET_KEY

export default function HomePage () {

  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])


  const cleanImput = () => setSearchQuery("")

  const fetchData = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.get('https://api.bing.microsoft.com/v7.0/search', {
        headers : {
          "Ocp-Apim-Subscription-Key": "1be90ad095044ddda56891aa8d0bf8ae"
        },
        params: {q: searchQuery}
      })
      setSearchResults(data?.data?.webPages?.value)
      cleanImput()
    } catch (error) {
      console.log(error)
    }
  }

  return <Paper elevation={3} >
    <Box width="100%" minHeight="100vh"  sx={{paddingTop: 8}}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{paddingTop: 3, paddingBottom: 3}}
      >
        <Typography variant='h5' mb={8}>Search service</Typography>

        <Paper
          component="form"
          onSubmit={fetchData}
          elevation={3}
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}

        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            value={searchQuery}
            onChange={(e)=> {setSearchQuery(e.target.value)}}
          />
          {searchQuery && 
            <IconButton sx={{ p: '10px' }} aria-label="close" 
              onClick={cleanImput}
            >
              <ClearIcon />
            </IconButton>
          }
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={fetchData}>
            <SearchIcon />
          </IconButton>
        </Paper>

        {
          searchResults.length > 0 
          ? <Box width="75%" height="100%"  sx={{py: 4 , px: 12, alignSelf: 'start'}}>
            {searchResults.map((item) => {
              return <Link href={item.url} key={item.id} sx={{textDecoration: "none"}}>
                <Paper sx={{py:2, px:4, my:2}}>
                  <Typography variant="subtitle2" color={'blue'} fontSize={16}>{item.name}</Typography>
                  <Typography variant="subtitle2" color={'gray'}>{item.displayUrl}</Typography>
                  <Typography variant="body1" height={80}  overflow={'hidden'} textOverflow={'ellipsis'}>{
                    item.snippet.length > size 
                    ? item.snippet.slice(0, size) + ' ...' 
                    : item.snippet
                  }
                  </Typography>
                </Paper>
              </Link>
            })}
          </Box>
          : <Typography mt={6}>There is nothing here yet</Typography>
        }
      </Grid>
    </Box>
  </Paper>
}