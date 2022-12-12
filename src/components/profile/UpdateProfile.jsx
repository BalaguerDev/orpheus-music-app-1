import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { IoMdCheckmarkCircle, IoMdCreate } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../api';
import fetchUpdateUser from '../../api/fetchUpdateUser';
import { UPDATE } from '../../redux/features/user_data/userSlice';
import { FormStyle } from '../style/generalStyle';

import { DivEditUserData, DivUserData, InputEditStyle, DivEditUserContainer, PTextEdit, ButtonSubmitEdit, SpanIconClick } from '../style/profileStyle';

const UpdateProfile = () => {
    const initialState = {
        username: false,
        firstName: false,
        lastName: false,
        location: false
    }
    const [openInput, setOpenInput] = useState(initialState)

    const userActualData = useSelector(state => state.userData.user.userData);
    const userId = useSelector(state => state.userData.user.id);
    console.log(userId)
    const {
        register,
        handleSubmit,
    } = useForm();

    const [UpdateUserData, setUpdateUserData] = useState({
        id: userId,
        userData: {
            username: userActualData.username,
            firstName: userActualData.firstName,
            lastName: userActualData.lastName,
            email: userActualData.email,
            country: userActualData.country,
            city: userActualData.city,
            password: userActualData.password,
            secretQuestion: userActualData.secretQuestion,
            secretAnswer: userActualData.secretAnswer,
            avatar: userActualData.avatar,
            banner: userActualData.banner,
            favGenres: userActualData.favGenres,
        },
        work: {
            myAlbums: [],
            myTracks: [],
        },
        myPlaylists: [],
        favPlaylists: [],
        favAlbums: [],
        favTracks: [],
        followers: [],
        following: [],
        isVerified: false,
        isAdmin: false,
        isLoggedIn: false,
    });

    const { userData } = UpdateUserData;
    const dispatch = useDispatch();
    const updateUser = ({
        username,
        firstName,
        lastName,
    }) => {
        userData.username = username || userActualData.username;
        userData.firstName = firstName || userActualData.firstName;
        userData.lastName = lastName || userActualData.lastName;

        setUpdateUserData({
            ...UpdateUserData,
        });

        console.log(UpdateUserData);
        fetchUpdateUser(UpdateUserData, userId);
        dispatch(UPDATE(UpdateUserData))
        setOpenInput(prev => prev = initialState)
    };

    return (
        <FormStyle onSubmit={handleSubmit(data => updateUser(data))}>
            <DivEditUserContainer>
                {!openInput.username
                    ?
                    <DivUserData>
                        <PTextEdit>{userActualData.username}</PTextEdit>
                        <SpanIconClick><IoMdCreate onClick={() => setOpenInput(prev => prev = { ...prev, username: true })} /></SpanIconClick>
                    </DivUserData>
                    :
                    <DivEditUserData>
                        <InputEditStyle
                            autoFocus
                            type='text'
                            required
                            {...register('username', {
                                required: true
                            })}
                        />
                        {/* SubmitButton ⬇️*/}
                        <ButtonSubmitEdit type='submit'><IoMdCheckmarkCircle /></ButtonSubmitEdit>
                    </DivEditUserData>
                }
            </DivEditUserContainer>
            <DivEditUserContainer>
                {!openInput.firstName
                    ?
                    <DivUserData>
                        <PTextEdit>{userActualData.firstName}</PTextEdit>
                        <SpanIconClick><IoMdCreate onClick={() => setOpenInput(prev => prev = { ...prev, firstName: true })} /></SpanIconClick>
                    </DivUserData>
                    :
                    <DivEditUserData>
                        <InputEditStyle
                            autoFocus
                            type='text'
                            required
                            {...register('firstName', {
                                required: true
                            })}
                        />
                        {/* SubmitButton ⬇️*/}
                        <ButtonSubmitEdit type='submit'><IoMdCheckmarkCircle /></ButtonSubmitEdit>
                    </DivEditUserData>
                }
            </DivEditUserContainer>
            <DivEditUserContainer>
                {!openInput.lastName
                    ?
                    <DivUserData>
                        <PTextEdit>{userActualData.lastName}</PTextEdit>
                        <SpanIconClick><IoMdCreate onClick={() => setOpenInput(prev => prev = { ...prev, lastName: true })} /></SpanIconClick>
                    </DivUserData>
                    :
                    <DivEditUserData>
                        <InputEditStyle
                            autoFocus
                            type='text'
                            required
                            {...register('lastName', {
                                required: true
                            })}
                        />
                        {/* SubmitButton ⬇️*/}
                        <ButtonSubmitEdit type='submit'><IoMdCheckmarkCircle /></ButtonSubmitEdit>
                    </DivEditUserData>
                }
            </DivEditUserContainer>
            <DivEditUserContainer>
                {!openInput.location
                    ?
                    <DivUserData>
                        <PTextEdit>{userActualData.country}</PTextEdit>
                        <SpanIconClick><IoMdCreate onClick={() => setOpenInput(prev => prev = { ...prev, location: true })} /></SpanIconClick>
                    </DivUserData>
                    :
                    <DivEditUserData>
                        <InputEditStyle />
                        {/* SubmitButton ⬇️*/}
                        <ButtonSubmitEdit type='submit'><IoMdCheckmarkCircle /></ButtonSubmitEdit>
                    </DivEditUserData>
                }
            </DivEditUserContainer>
        </FormStyle>
    )
}

export default UpdateProfile