variable "password" {
  description = "The password for the database"
  type        = string
  default     = "password"
}

variable "main_domain" {
  description = "The url for the application"
  type        = string
  default = "frankylim.com"
}

variable "domain" {
  description = "The url for the application"
  type        = string
  default = "cinemate.frankylim.com"
}