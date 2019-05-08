import React, { createElement } from 'react';
import { Button } from 'antd';
import { BasicLayout } from 'layouts';
import './index.less';

export class Exception extends React.PureComponent {
    static defaultProps = {
        backText: '返回主页',
        redirect: '/',
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {
            backText,
            linkElement = 'a',
            actions,
            redirect,
        } = this.props;
        return (
            <BasicLayout>
                <div className='exception'>
                    <div className="imgBlock">
                        <img
                            className="imgEle"
                            alt=""
                            src="https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg"
                        />
                    </div>
                    <div className="content">
                        <h1>404</h1>
                        <div className="desc">抱歉，您访问的页面不存在</div>
                        <div className="actions">
                            {actions ||
                                createElement(
                                    linkElement,
                                    {
                                        to: redirect,
                                        href: redirect,
                                    },
                                    <Button type="primary">{backText}</Button>
                                )}
                        </div>
                    </div>
                </div>

            </BasicLayout>
        );
    }
}