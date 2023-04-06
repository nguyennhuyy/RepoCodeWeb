import { useState, useEffect } from "react";
import WebHeading from "~/components/WebHeading";
import WebText from "~/components/WebText";
import { COLOR } from "~/utils/appConst";
import {
	Container,
	BoxUpload,
	BoxLogo,
	UrlUpload,
	BoxResultImage,
	ItemResult,
	TopResult,
	HeaderLeft,
	ContentResult,
	IconCloseTop,
	BoxImage,
	ImageResult,
	DownloadItem,
	WrapperDownload
} from "./styles";
import { useFormik } from "formik";
import { Button } from "@mui/material";
import { IconClosePopup, LogoOrigin } from "~/assets/path";

const ItemDownload = () => {
	return (
		<WrapperDownload>
			<Button
				sx={{
					borderRadius: "99px",
					color: COLOR.WHITE_0,
					textTransform: "none",
					fontWeight: 600,
					fontFamily: "Poppins, sans-serif",
					backgroundColor: COLOR.BLUE_0,
					padding: "10px 34px",
					width: "200px",
					":hover": {
						backgroundColor: COLOR.BLUE_0,
						opacity: 0.8
					}
				}}>
				Download
			</Button>
			<WebText margin={"4px 0 0 0"} fontSize={12}>
				Preview Image447 × 559{" "}
			</WebText>
			<Button
				sx={{
					borderRadius: "99px",
					color: COLOR.BLUE_0,
					textTransform: "none",
					fontWeight: 600,
					fontFamily: "Poppins, sans-serif",
					padding: "10px 34px",
					border: `1px solid ${COLOR.BLUE_0}`,
					width: "200px",
					marginTop: "20px"
				}}>
				Download HD
			</Button>
			<WebText margin={"4px 0 0 0"} fontSize={12}>
				Preview Image447 × 559{" "}
			</WebText>
		</WrapperDownload>
	);
};

const ResultImageHandle = ({
	displayBoxResult,
	changeDisplayBox,
	imageOrigin,
	imageRemoved,
	callbackRefreshData
}) => {
	const [activeResult, setActiveResult] = useState(true);
	return (
		<>
			{displayBoxResult && imageOrigin && imageRemoved && (
				<BoxResultImage>
					<ItemResult>
						<TopResult>
							<HeaderLeft>
								<WebText
									fontSize={16}
									fontWeight={activeResult ? 500 : undefined}
									color={activeResult ? COLOR.BLUE_0 : undefined}
									style={{
										":hover": {
											color: COLOR.BLUE_0
										},
										cursor: "pointer",
										borderBottom: activeResult
											? `3px solid ${COLOR.BLUE_0}`
											: undefined
									}}
									onClick={() => setActiveResult(true)}>
									Original
								</WebText>
								<WebText
									fontSize={16}
									fontWeight={!activeResult ? 500 : undefined}
									color={!activeResult ? COLOR.BLUE_0 : undefined}
									onClick={() => setActiveResult(false)}
									style={{
										":hover": {
											color: COLOR.BLUE_0
										},
										cursor: "pointer",
										borderBottom: !activeResult
											? `3px solid ${COLOR.BLUE_0}`
											: false
									}}>
									Removed Background
								</WebText>
							</HeaderLeft>
							<IconCloseTop
								onClick={() => {
									changeDisplayBox(true);
									callbackRefreshData(true);
								}}>
								<IconClosePopup width='24px' height='24px' />
							</IconCloseTop>
						</TopResult>
						{activeResult ? (
							<ContentResult>
								<BoxImage>
									<ImageResult src={imageOrigin} />
								</BoxImage>
								<DownloadItem>
									<ItemDownload />
								</DownloadItem>
							</ContentResult>
						) : (
							<ContentResult>
								<BoxImage>
									<ImageResult
										src={`data:image/jpeg;base64,${imageRemoved}`}
										style={{ cursor: "pointer" }}
									/>
								</BoxImage>
								<DownloadItem>
									<ItemDownload />
								</DownloadItem>
							</ContentResult>
						)}
					</ItemResult>
				</BoxResultImage>
			)}
		</>
	);
};

const UploadScreen = ({
	onRemoveBg,
	imageOrigin,
	imageRemoved,
	callbackRefreshData
}) => {
	const formik = useFormik({
		initialValues: {
			imageRemove: ""
		},
		onSubmit: values => onRemoveBg(values)
	});
	const [displayBoxResult, setDisplayBoxResult] = useState(false);
	const changeDisplayBox = data => {
		if (data) {
			setDisplayBoxResult(!displayBoxResult);
		}
	};
	return (
		<Container>
			<WebHeading
				fontSize={60}
				fontWeight={600}
				textAlign='center'
				styles={{
					width: "57%",
					margin: "0 auto"
				}}>
				Upload an image to remove the background
			</WebHeading>

			<BoxUpload>
				<BoxLogo>
					<LogoOrigin />
				</BoxLogo>
				<Button
					variant='contained'
					component='label'
					sx={{
						borderRadius: 9999,
						fontSize: 22,
						textTransform: "none"
					}}>
					Upload Image
					<input
						hidden
						accept='image/*'
						type='file'
						name='image'
						onChange={e => {
							setDisplayBoxResult(true);
							formik.setFieldValue("imageRemove", e.target.files[0]);
							formik.handleSubmit();
						}}
					/>
				</Button>

				<UrlUpload>
					<WebText fontSize={18} fontWeight={500} margin={"0"}>
						or drop a file,
					</WebText>
					<WebText fontSize={13} margin={"5px 0 0 0 "}>
						paste image or URL
					</WebText>
				</UrlUpload>
			</BoxUpload>
			<ResultImageHandle
				displayBoxResult={displayBoxResult}
				changeDisplayBox={changeDisplayBox}
				imageOrigin={imageOrigin}
				imageRemoved={imageRemoved}
				callbackRefreshData={callbackRefreshData}
			/>
		</Container>
	);
};

export default UploadScreen;
