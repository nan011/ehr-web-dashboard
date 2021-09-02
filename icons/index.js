import { Icon } from "@components/index";

function createIcon(src) {
  return (props) => <Icon src={src} {...props} />;
}

export const EHRIcon = createIcon("/icons/ehr.svg");
export const FullEHRIcon = createIcon("/icons/full-ehr.svg");
export const PadlockIcon = createIcon("/icons/padlock.svg");
export const UserIcon = createIcon("/icons/user.svg");
export const EyeIcon = createIcon("/icons/eye.svg");
export const EHRWhiteIcon = createIcon("/icons/ehr-white.svg");
export const ModalXIcon = createIcon("/icons/modal-x.svg");
export const CheckIcon = createIcon("/icons/check.svg");
export const LeftArrowIcon = createIcon("/icons/left-arrow.svg");
export const RightArrowIcon = createIcon("/icons/right-arrow.svg");
export const DownArrowIcon = createIcon("/icons/down-arrow.svg");
export const TripleBarIcon = createIcon("/icons/triple-bar.svg");
