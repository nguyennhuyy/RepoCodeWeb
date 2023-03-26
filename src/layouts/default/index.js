import {
	forwardRef,
	memo,
	useCallback,
	useEffect,
	useRef,
	useState
} from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Language, Logo } from "~/assets/path";
import WebAvatar from "~/components/WebAvatar";
import WebText from "~/components/WebText";
import { getAvatarName } from "~/helpers/formatValue";
import { useActions } from "~/hooks/useActions";
import useSelectorShallow from "~/hooks/useSelectorShallow";
import { signOutSubmit } from "~/redux/actions/authActions";
import {
	getUserInfoSelector,
	getTokenSelector
} from "~/redux/selectors/userSelector";
import { COLOR } from "~/utils/appConst";
import {
	Wrapper,
	Header,
	BoxOutLet,
	Left,
	Center,
	Right,
	BoxList,
	BoxItem,
	BoxAuth,
	BoxBottom,
	BoxLanguage,
	ItemBottom,
	ItemBottomTop,
	ItemLogo,
	ListBottom,
	ItemList,
	ItemCopyright,
	ItemAvatar,
	ImageAvatar,
	BoxModalInfo
} from "./styles";
const ModalInfo = forwardRef(
	({ logOutFunc, fullname, infoUser, toggleBox }, ref) => {
		return (
			<div ref={ref}>
				{toggleBox && (
					<BoxModalInfo>
						<WebText
							fontSize={16}
							fontWeight={500}
							margin={0}
							style={{
								margin: 0,
								padding: "8px 0",
								cursor: "default"
							}}>
							{fullname}
						</WebText>
						<WebText
							fontSize={16}
							style={{
								":hover": {
									color: COLOR.RGB_4
								},
								margin: 0,
								padding: "8px 0",
								cursor: "pointer"
							}}>
							<Link to={`/user/${infoUser._id}`}> My Account</Link>
						</WebText>
						<WebText
							fontSize={16}
							style={{
								":hover": {
									color: COLOR.RGB_4
								},
								margin: 0,
								padding: "8px 0",
								cursor: "pointer"
							}}
							onClick={logOutFunc}>
							Logout
						</WebText>
					</BoxModalInfo>
				)}
			</div>
		);
	}
);
const LayoutHeader = ({ infoUser, token, navigate }) => {
	const [toggleBox, setToggleBox] = useState(false);
	const menuRef = useRef();
	const avtRef = useRef();
	const location = useLocation();
	const actions = useActions({
		signOutSubmit
	});
	const logOutFunc = useCallback(() => {
		actions.signOutSubmit();
		navigate("/auth/login");
	}, []);

	useEffect(() => {
		let handleCloseOutside = e => {
			if (
				!menuRef.current.contains(e.target) &&
				!avtRef.current.contains(e.target)
			) {
				setToggleBox(false);
			}
		};
		document.addEventListener("mousedown", handleCloseOutside);
		return () => {
			document.removeEventListener("mousedown", handleCloseOutside);
		};
	}, [toggleBox]);
	useEffect(() => {
		setToggleBox(false);
	}, [location]);
	return (
		<Header>
			<Left>
				<Link
					to={"/dashboard"}
					style={{ display: "flex", alignItems: "center" }}>
					<Logo />
				</Link>
			</Left>
			<Center>
				<BoxList>
					<BoxItem>
						<WebText fontSize={16}>Remove Background</WebText>
					</BoxItem>
					<BoxItem>
						<WebText fontSize={16}>How to use</WebText>
					</BoxItem>
					<BoxItem>
						<WebText fontSize={16}>Tools & API</WebText>
					</BoxItem>
					<BoxItem>
						<WebText fontSize={16}>Pricing</WebText>
					</BoxItem>
				</BoxList>
			</Center>
			{!token ? (
				<Right>
					<BoxAuth>
						<WebText fontSize={16} fontWeight={400}>
							<Link to={"/auth/login"}>Login</Link>
						</WebText>
					</BoxAuth>
					<BoxAuth activeBg>
						<WebText fontSize={16} fontWeight={400}>
							<Link to={"/auth/register"}>Sign up</Link>
						</WebText>
					</BoxAuth>
				</Right>
			) : (
				<>
					<ItemAvatar>
						{infoUser?.avatar ? (
							<div ref={avtRef}>
								<ImageAvatar
									src={infoUser.avatar}
									onClick={() => {
										setToggleBox(!toggleBox);
									}}
								/>
							</div>
						) : (
							<div ref={avtRef}>
								<WebAvatar
									item={getAvatarName(infoUser)}
									onClick={() => {
										setToggleBox(!toggleBox);
									}}
								/>
							</div>
						)}
						<ModalInfo
							ref={menuRef}
							logOutFunc={logOutFunc}
							fullname={infoUser.fullname}
							infoUser={infoUser}
							toggleBox={toggleBox}
						/>
					</ItemAvatar>
				</>
			)}
		</Header>
	);
};
const LayoutBottom = ({ navigate }) => {
	return (
		<BoxBottom>
			<ItemBottom>
				<ItemBottomTop>
					<ItemLogo>
						<BoxLanguage>
							<Language />
							<WebText fontSize={18} margin={"0px 0px 0px 10px"}>
								English
							</WebText>
						</BoxLanguage>
					</ItemLogo>
					<ListBottom>
						<ItemList>
							<WebText color={COLOR.WHITE_0} fontSize={16}>
								Terms of Service
							</WebText>
						</ItemList>
						<ItemList>
							<WebText color={COLOR.WHITE_0} fontSize={16}>
								General Terms and Conditions
							</WebText>
						</ItemList>
						<ItemList>
							<WebText color={COLOR.WHITE_0} fontSize={16}>
								Privacy Policy
							</WebText>
						</ItemList>
						<ItemList>
							<WebText color={COLOR.WHITE_0} fontSize={16}>
								Cookies Policy
							</WebText>
						</ItemList>
						<ItemList onClick={() => navigate("/support/contact")}>
							<WebText color={COLOR.WHITE_0} fontSize={16}>
								Contact Us
							</WebText>
						</ItemList>
					</ListBottom>
				</ItemBottomTop>
				<ItemCopyright>
					<WebText margin={"50px 0px 0px 0px"} color={COLOR.WHITE_0}>
						Made with by Huy Dev
					</WebText>
					<WebText margin={"50px 0px 0px 0px"} color={COLOR.WHITE_0}>
						© Huy Dev 2023
					</WebText>
				</ItemCopyright>
			</ItemBottom>
		</BoxBottom>
	);
};

const LayoutDefault = ({ children }) => {
	const infoUser = useSelectorShallow(getUserInfoSelector);
	const token = useSelectorShallow(getTokenSelector);
	const navigate = useNavigate();
	return (
		<Wrapper>
			<LayoutHeader infoUser={infoUser} token={token} navigate={navigate} />
			<BoxOutLet>
				<Outlet />
				{children}
			</BoxOutLet>
			<LayoutBottom navigate={navigate} />
		</Wrapper>
	);
};

export default memo(LayoutDefault);
