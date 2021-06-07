package demo.logic.exceptions;

public class InvalidFileException extends InternalErrorException {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public InvalidFileException() {
		super();
	}

	public InvalidFileException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public InvalidFileException(String message, Throwable cause) {
		super(message, cause);
	}

	public InvalidFileException(String message) {
		super(message);
	}

	public InvalidFileException(Throwable cause) {
		super(cause);
	}
	
	

}
