import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';


export const Spin = () => {
	return (
		<Box sx={{ width: '80%' }}>
			<LinearProgress />
		</Box>
	);
}