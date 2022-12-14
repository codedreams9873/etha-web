import React from 'react';

import { User } from '../models';
import { Image } from 'react-bootstrap';
import { useRouter } from 'next/router';

import styles from '../styles/UserCard.module.css';
interface IProps {
    user: User;
}

export const UserCard: React.FC<IProps> = (props: IProps) => {
    const history = useRouter();

    return (
        <div
            className={`${styles.figure_card_background} mx-auto`}
            style={{ textAlign: 'center', justifyContent: 'center' }}
            onClick={() => {
                history.push(`/profile/${props.user.tag}`);
            }}
        >
            <div className="d-flex w-100 py-2" style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    className="image-container ml-2"
                    src={props.user.imageUrl}
                    alt=""
                    style={{ width: '53px', height: '53px' }}
                />
                <div
                    style={{
                        display: 'flex',
                        flex: 1,
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}
                >
                    <div
                        className="d-flex w-100 h-100 pl-3"
                        style={{
                            height: '100%',
                            alignItems: 'center',
                            textAlign: 'start',
                            flexDirection: 'row',
                        }}
                    >
                        <div className=" w-100">
                            <div className="figure-title">{props.user.name}</div>
                            <div className="figure-bio ">{props.user.title}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default UserCard;
