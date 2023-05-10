import { AnyHeader, DjmaxPattern, NumberBoolean } from "../static";
interface RegisterBody {
    name: string;
    dlc?: string;
    composer?: string;
    button: number;
    pattern: DjmaxPattern;
    score: number;
    maxCombo: NumberBoolean;
}
interface RegisterParams extends RegisterBody {
    userNo: string;
    token: string;
}
interface RegisterHeader extends AnyHeader {
    Authorization: string;
}
interface RegisterResponse {
    success: boolean;
    update: boolean;
}
declare const register: (params: RegisterParams) => Promise<RegisterResponse>;
export { register, RegisterHeader, RegisterBody, RegisterResponse, RegisterParams };
//# sourceMappingURL=register.d.ts.map