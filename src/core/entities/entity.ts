export class Entity<Props> {
    private _id: string;
    protected props: Props;

    get id(): string {
        return this._id;
    }

    constructor(props: Props, id?: string) {
        this.props = props;
        this._id = id ?? crypto.randomUUID();
    }
}