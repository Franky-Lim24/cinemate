resource "aws_cloudwatch_log_group" "ecs_log_group" {
  name = "/ecs/my-ecs-application-logs"
  retention_in_days = 30  // Set retention as needed
}
