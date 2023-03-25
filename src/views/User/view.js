import { useState, useEffect } from "react";
import { Button, Select, Avatar, Stack } from "@mui/material";
import WebHeading from "~/components/WebHeading";
import WebText from "~/components/WebText";
import { COLOR } from "~/utils/appConst";
import { Container, BoxForm, CardShadow } from "./styles";
import { Formik } from "formik";
import { UPDATE_INFO_SCHEMA } from "~/helpers/validate";
import WebInput from "~/components/WebInput";
import WebError from "~/components/WebError";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import dayjs from "dayjs";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import moment from "moment";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import IconButton from "@mui/material/IconButton";
import useSelectorShallow from "~/hooks/useSelectorShallow";

import { getUserInfoSelector } from "~/redux/selectors/userSelector";
import WebAvatar from "~/components/WebAvatar";
import { getAvatarName } from "~/helpers/formatValue";
const UserScreen = ({ onUpdate }) => {
	const [avatar, setAvatar] = useState();
	const infoUser = useSelectorShallow(getUserInfoSelector);
	useEffect(() => {
		return () => avatar && URL.revokeObjectURL(avatar);
	}, [avatar]);
	return (
		<Container>
			<BoxForm>
				<CardShadow>
					<WebHeading
						fontSize={40}
						textAlign={"center"}
						fontWeight={600}
						margin={"0 0 20px 0"}>
						My Account
					</WebHeading>
					<Formik
						initialValues={{
							avatar: infoUser.avatar || avatar,
							fullname: infoUser.fullname,
							gender: infoUser.gender,
							birthday: infoUser.birthday
								? moment(infoUser.birthday).format("YYYY-MM-DD")
								: moment(new Date()).format("YYYY-MM-DD"),
							address: infoUser.address
						}}
						validationSchema={UPDATE_INFO_SCHEMA}
						onSubmit={onUpdate}>
						{({ values, handleChange, errors, touched, submitForm }) => {
							return (
								<>
									<Stack
										direction='column'
										alignItems='center'
										spacing={2}
										position='relative'
										margin={"0 auto"}
										width={"max-content"}>
										{infoUser.avatar || avatar ? (
											<Avatar
												alt='Remy Sharp'
												src={avatar || infoUser.avatar}
												sx={{
													width: "150px",
													height: "150px",
													marginBottom: "16px",
													border: `5px solid ${COLOR.PINK_1}`
												}}
											/>
										) : (
											<WebAvatar
												item={getAvatarName(infoUser)}
												width={150}
												height={150}
												fontSize={30}
												style={{
													borderRadius: 999,
													marginBottom: "16px",
													border: `5px solid ${COLOR.PINK_1}`
												}}></WebAvatar>
										)}
										<IconButton
											color='primary'
											aria-label='upload picture'
											sx={{
												position: "absolute",
												bottom: 4,
												right: 15,
												backgroundColor: COLOR.RGB_1
											}}
											component='label'>
											<input
												hidden
												accept='image/*'
												type='file'
												name='image'
												onChange={e => {
													handleChange({
														target: {
															name: "avatar",
															value: e.target.files[0]
														}
													});
													setAvatar(URL.createObjectURL(e.target.files[0]));
												}}
											/>
											<PhotoCamera />
										</IconButton>
									</Stack>
									{touched && errors && (
										<WebText
											margin={"0 0 10px 0"}
											fontSize={12}
											textAlign={"center"}
											color={COLOR.RED_0}>
											{errors.avatar}
										</WebText>
									)}
									<WebInput
										label={"Full name"}
										styles={{
											width: "100%",
											marginBottom: "16px"
										}}
										variant='outlined'
										value={values.fullname}
										onChange={handleChange("fullname")}
										touched={touched.fullname}
										messageError={errors.fullname}
									/>
									<FormControl fullWidth>
										<InputLabel id='demo-simple-select-label'>
											Gender
										</InputLabel>
										<Select
											labelId='demo-simple-select-label'
											id='demo-simple-select'
											value={values.gender}
											label='Gender'
											sx={{
												marginBottom: "16px"
											}}
											onChange={handleChange("gender")}>
											<MenuItem value={0}>Male</MenuItem>
											<MenuItem value={1}>Female</MenuItem>
										</Select>
									</FormControl>
									{touched && errors && (
										<WebText
											margin={"0 0 10px 0"}
											fontSize={12}
											color={COLOR.RED_0}>
											{errors.gender}
										</WebText>
									)}
									<LocalizationProvider dateAdapter={AdapterDayjs}>
										<DatePicker
											label='Birthday'
											sx={{
												width: "100%",
												color: COLOR.RGB_6,
												marginBottom: "16px"
											}}
											format={"DD/MM/YYYY"}
											defaultValue={dayjs(values.birthday)}
											onChange={data => {
												handleChange({
													target: {
														name: "birthday",
														value: data.$d
													}
												});
											}}
										/>
									</LocalizationProvider>
									{touched && errors && (
										<WebText
											WebText
											margin={"0 0 10px 0"}
											fontSize={12}
											color={COLOR.RED_0}>
											{errors.birthday}
										</WebText>
									)}
									<WebInput
										label={"Address"}
										styles={{
											width: "100%",
											marginBottom: "16px"
										}}
										variant='outlined'
										value={values.address}
										onChange={handleChange("address")}
										touched={touched.address}
										messageError={errors.address}
										multiline={true}
										rows={4}
									/>
									<Button
										variant='contained'
										sx={{
											padding: "8px 36px",
											fontFamily: "Poppins, sans-serif",
											borderRadius: 999,
											fontWeight: 600,
											textTransform: "none",
											fontSize: "16px",
											display: "flex",
											marginLeft: "auto"
										}}
										onClick={submitForm}>
										Save
									</Button>
								</>
							);
						}}
					</Formik>
				</CardShadow>
			</BoxForm>
		</Container>
	);
};

export default UserScreen;
