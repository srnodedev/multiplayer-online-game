package com.together.game;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@SpringBootApplication
public class GameApplication {
	private static final Logger logger = LoggerFactory.getLogger(GameApplication.class);

	public static void main(String[] args) {
		logger.info("__________________SPRING BOOT___________________");
		SpringApplication.run(GameApplication.class, args);
	}

}
