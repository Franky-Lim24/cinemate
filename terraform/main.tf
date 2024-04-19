terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

# Configure the AWS Provider
provider "aws" {
  region = "ap-southeast-1"
  profile = var.profile
}

module "module" {
  source = "./modules"
  password    = var.password
  domain      = var.domain
  main_domain = var.main_domain
}