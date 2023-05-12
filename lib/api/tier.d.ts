import { DjmaxButton, DjmaxTier } from "../static";
interface TierParams {
    nickname: string;
    button: DjmaxButton;
}
interface Tier {
    rating: number;
    name: DjmaxTier;
    code: string;
}
interface TierResponse {
    success: boolean;
    top50sum: number;
    tierPoint: number;
    tier: Tier;
    next: Tier;
}
declare const tier: (params: TierParams) => Promise<TierResponse>;
export { TierParams, TierResponse, Tier, tier };
//# sourceMappingURL=tier.d.ts.map