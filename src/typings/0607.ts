declare namespace AI0607 {

	interface AI0607Req {
		prompt: string;
		user_id: string;
	}

	interface AI0607Rsp {
		code: number;
		message: string;
		data: string;
	}
}
