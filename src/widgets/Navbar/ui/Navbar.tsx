import { useTranslation } from "react-i18next";
import { Modal } from "shared/ui/Modal/Modal";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useCallback, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);

	const onToggleModal = useCallback(() => {
		setIsAuthModal((prev) => !prev);
	}, []);

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.CLEAR_INVERTED}
				className={cls.links}
				onClick={onToggleModal}
			>
				{t("Войти")}
			</Button>
			<Modal isOpen={isAuthModal} onClose={onToggleModal}>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem sint
				beatae enim aliquam dolorem molestias adipisci incidunt asperiores.
				Eligendi, sunt.
			</Modal>
		</div>
	);
};
