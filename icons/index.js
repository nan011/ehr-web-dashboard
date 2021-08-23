import { Icon } from "@components/index";

function createIcon(src) {
  return (props) => <Icon src={src} {...props} />;
}

export const EHRIcon = createIcon("/icons/ehr.svg");
export const PadlockIcon = createIcon("/icons/padlock.svg");
export const UserIcon = createIcon("/icons/user.svg");
export const EyeIcon = createIcon("/icons/eye.svg");
export const EHRWhiteIcon = createIcon("/icons/ehr-white.svg");
