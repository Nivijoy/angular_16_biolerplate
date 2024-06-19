export interface CurrentUserDetails {
    token: string;
    isSuperAdmin: boolean;
    isIspAdmin: boolean;
    isSubscriber: boolean;
    level_id: number;
    menu_id: Array<number>;
    username: string;
    company: string;
}