import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector} from "react-redux";
import {Card, Form, Col, Button,Alert} from "react-bootstrap";
import "./Password.scss";
import { changePassword } from "../../../store/actions/auth";
import { useNavigate } from "react-router-dom";

const Password = () => {
    const history = useNavigate()
    const { erorMessage } = useSelector((state) => state.authReducer);
    const [passwordOld, setPasswordOld] = useState("")
    const [passwordNew, setPasswordNew] = useState("")
    const [passwordCnfrm, setPasswordCnfrm] = useState("")
    const [message, setMessage] = useState(false)
    const dispatch = useDispatch();
    useEffect(() => {
        if(erorMessage){
            setMessage(erorMessage)
        }
      }, [erorMessage]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = {
            password: passwordOld,
            newPassword: passwordNew
        }
        if(passwordNew.length <= 8){
           return setMessage("password minimal 8 karakter")
        }
        if(passwordNew !== passwordCnfrm){
           return setMessage("konfirmasi password tidak sama")
        }
        dispatch(changePassword(data, history));
    }
  return (
    <div className="password">
        {message && (
          <Alert key="danger" variant="danger">
            <>{message}</>
          </Alert>
        )}
        <Card body>
            <Form className="form-password" onSubmit={(e)=>handleSubmit(e)}>
                <Form.Group
                    as={Col}
                    className="form mb-3"
                    controlId="formGridPassword"
                >
                    <Form.Label>KATA SANDI LAMA</Form.Label>
                    <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                    onChange={(e)=> setPasswordOld(e.target.value)}
                    onKeyUp={()=>setMessage(false)}
                    />
                </Form.Group>
                <Form.Group
                    as={Col}
                    className="form mb-3"
                    controlId="formGridPassword"
                >
                    <Form.Label>KATA SANDI BARU</Form.Label>
                    <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                    onChange={(e)=> setPasswordNew(e.target.value)}
                    onKeyUp={()=>setMessage(false)}
                    />
                </Form.Group>
                <Form.Group
                    as={Col}
                    className="form mb-3"
                    controlId="formGridPassword"
                >
                    <Form.Label>KONFIRMASI KATA SANDI BARU</Form.Label>
                    <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                    onChange={(e)=> setPasswordCnfrm(e.target.value)}
                    onKeyUp={()=>setMessage(false)}
                    />
                </Form.Group>
                <div className="pass-button">
                    <Button className="btn-primary my-2" type="submit">
                        Simpan perubahan
                    </Button>
                </div>
            </Form>
        </Card>
    </div>
  )
}

export default Password