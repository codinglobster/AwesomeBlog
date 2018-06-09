import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from 'dva';
import loginStyle from './login.less';
// import Background from './dynamicBackground';
import Particles from './particlesBack';

const FormItem = Form.Item;

class LoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <>
        {/* <Background /> */}
        <Particles />
        <Form onSubmit={this.handleSubmit} className={loginStyle['login-form']}>
          <div className={loginStyle['inner']}>
        		<div>
        			<h1 className={loginStyle.whiteFont}>Feeling Different Every Moment</h1>
              <p className={loginStyle.whiteFont}>with words and mode</p>
        		</div>
        	</div>
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input size="large" placeholder="large size" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input size="large" placeholder="large size" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className={loginStyle['login-form-forgot']} href="">Forgot password</a>
            <Button size="large" placeholder="large size" type="primary" htmlType="submit" className={loginStyle['login-form-button']}>
              Log in
            </Button>
            Or <a href="">register now!</a>
          </FormItem>
        </Form>
      </>
    );
  }
}

export default connect()(Form.create()(LoginForm));
