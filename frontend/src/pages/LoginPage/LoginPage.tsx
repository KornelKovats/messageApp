import * as React from 'react';
import { Button, TextField } from '@mui/material';
import './LoginPage.scss';

const LoginPage: React.FunctionComponent = (): JSX.Element => {
    const [name, setName] = React.useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        const { value } = e.target;
        setName(value);
    };
    
    // const handleError = (): void => {
    //     const regex = new RegExp(/^[^*|":<>[\]{}`\\()';@&$]+$/);
    //     !name || name === '' ? setHelperText('Enter a name')
    //     : regex.test(name) ? setHelperText('Enter a valid name')
    //     : setHelperText('');
    //     helperText === '' ? setErrorState(false) : setErrorState(true);
    //     console.log(`error: ${errorState}`);
    // };
    
    return (
        <div className="Login">
            <form>
                <TextField 
                    id="name"
                    variant="standard" 
                    label="Enter a name" 
                    size="small"
                    autoComplete="off"
                    type="text"
                    value={name}
                    onChange={onChange}
                    // helperText={helperText}
                    // error={errorState}
                />
                <Button
                    id="join"
                    variant="contained" 
                    size="medium"
                    // type="submit"
                >
                    Join
                </Button>
            </form>
        </div>
    );
};

export default LoginPage;