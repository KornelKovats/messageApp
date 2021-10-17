import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import './LoginPage.scss';

interface Data {
    name: string
};

const LoginPage: React.FunctionComponent = (): JSX.Element => {
    const [name, setName] = React.useState('');
    const [helperText, setHelperText] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');
    const history = useHistory();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        const { value } = e.target;
        const regex = new RegExp(/^[a-z0-9_-]{3,16}$/ig);
        !value || value.length === 0 ? setHelperText('Enter a name')
        : !regex.test(value) ? setHelperText('Enter a valid name')
        : setHelperText('');
        setName(value);
    };

    const postData = async (url: string, data: Data) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        await fetch(url, requestOptions)
            .then((res) => {
                res.status  === 200 ? history.push('/') 
                : setErrorMessage('Oops! Something went wrong. Please try again later.');
            })
            .catch((err) => console.error(err.message));
    };

    const handleClick = (e: React.MouseEvent): void => {
        e.preventDefault();
        if (name.length === 0 || !name) {
            setHelperText('Enter a name') 
            return;
        }
        postData('backendurl', { name });
        localStorage.setItem('name', name);
    };
    
    return (
        <div className="login">
            <p className="error-message">{errorMessage}</p><br />
            <form>
                <TextField 
                    id="name" type="text" variant="standard" size="small" autoComplete="off"
                    label="Enter a name" value={name} onChange={onChange}
                    helperText={helperText} error={helperText.length === 0 ? false : true}
                />
                <Button
                    id="join" variant="contained" size="medium" type="submit"
                    onClick={handleClick}
                >
                    Join
                </Button>
            </form>
        </div>
    );
};

export default LoginPage;