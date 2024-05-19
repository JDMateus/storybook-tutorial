import { Box, Button, Input, Stack, Text } from '@/components';

export const LoginForm = () => {
  return (
    <Box className='px-8 py-12 border border-gray-300 rounded-xl'>
      <Stack>
        <Text as='h2' weight='bold' align='center' size='3xl' className='mb-2'>
          Login
        </Text>
        <Text as='span' emphasis='low' align='center' size='sm' className='mb-8'>
          Please enter your credentials to login
        </Text>
        <Text as='label' htmlFor='username' size='sm' weight='medium' className='mb-1.5'>
          User name
        </Text>
        <Input type='text' id='username' placeholder='User name' className='mb-4' />
        <Text as='label' htmlFor='password' size='sm' weight='medium' className='mb-1.5'>
          Password
        </Text>
        <Input type='password' id='password' placeholder='Password' />
        <Button type='submit' variant='solid' className='mt-10'>
          Login
        </Button>
      </Stack>
    </Box>
  );
};
