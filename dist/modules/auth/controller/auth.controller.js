import authService, { AuthService } from "../service/auth.service.js";
class AuthController {
    authService = authService;
    register = async (req, res, next) => {
        try {
            const user = await this.authService.register(req.body);
            return res.status(201).json({
                message: 'user created successfully',
                success: true,
                data: user
            });
        }
        catch (error) {
            next(error);
        }
    };
}
export default new AuthController();
//# sourceMappingURL=auth.controller.js.map