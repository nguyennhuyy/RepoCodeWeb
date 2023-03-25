import { Button } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import WebInput from "~/components/WebInput";
import WebText from "~/components/WebText";
import { SUPPORT_CONTACT_SCHEMA } from "~/helpers/validate";
import { COLOR } from "~/utils/appConst";
import { HeaderQuestion, BoxForm, ItemForm, FormData } from "./styles";
const SupportView = ({ onSupport }) => {
	return (
		<>
			<HeaderQuestion>
				<WebText
					fontSize={60}
					margin={"0"}
					textAlign='center'
					fontWeight={600}
					color={COLOR.WHITE_0}>
					Got questions?
					<br />
					We'll answer.
				</WebText>
			</HeaderQuestion>
			<BoxForm>
				<ItemForm>
					<Formik
						initialValues={{
							email: "",
							subject: "",
							message: ""
						}}
						onSubmit={onSupport}
						validationSchema={SUPPORT_CONTACT_SCHEMA}>
						{({ errors, touched, values, handleChange, handleSubmit }) => {
							return (
								<FormData>
									<WebText
										textAlign={"center"}
										fontSize={16}
										style={{ margin: "0 auto", marginBottom: 15 }}>
										Fill out this form and we will get back to you shortly.
									</WebText>
									<WebInput
										label='Email*'
										styles={{
											marginBottom: "16px"
										}}
										error={errors && touched}
										messageError={errors.email}
										value={values.email}
										onChange={handleChange("email")}
									/>
									<WebInput
										label='Subject*'
										styles={{
											marginBottom: "16px"
										}}
										error={errors && touched}
										messageError={errors.subject}
										value={values.subject}
										onChange={handleChange("subject")}
									/>
									<WebInput
										label='Message*'
										multiline
										rows={5}
										styles={{
											marginBottom: "16px"
										}}
										error={errors && touched}
										messageError={errors.message}
										value={values.message}
										onChange={handleChange("message")}
									/>
									<Button
										variant='contained'
										onClick={handleSubmit}
										sx={{
											width: "max-content",
											margin: "0 auto",
											padding: "10px 24px",
											fontFamily: "Poppins, sans-serif",
											borderRadius: 999,
											fontWeight: 600,
											textTransform: "none",
											fontSize: "14px"
										}}>
										Send message
									</Button>
									<WebText
										textAlign={"center"}
										fontSize={12}
										style={{ width: "60%", margin: "0 auto", marginTop: 10 }}>
										This form is protected by hCaptcha and its Privacy Policy
										and Terms of Service apply.
									</WebText>
								</FormData>
							);
						}}
					</Formik>
				</ItemForm>
			</BoxForm>
		</>
	);
};

export default SupportView;
