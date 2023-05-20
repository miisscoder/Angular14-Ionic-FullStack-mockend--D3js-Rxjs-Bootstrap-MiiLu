import { environment } from '../../../environments/environment';

const {
    apiHost,
} = environment;

export interface UnrefinedParams {
    [key: string]: any;
}

export class ApiBaseService {
    // api host
    private readonly host: string;

    constructor(path = '', hostt = apiHost) {
        this.host = hostt;
        this.host += path;
    }

    /**
     * return the api endpoint
     * @param path path string
     */
    protected endpoint(path = ''): string {
        return this.host + path;
    }

    
}
