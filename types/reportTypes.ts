
// Define the interface for an individual test
export interface ITest {
    name: string;                       // Name of the test
    time: string;                       // Time taken for the test
    failure_msg?: string;               // Optional failure message
  }

  // Define the interface for the report
export interface IReport {
    end_time: string;                   // End time of the report
    id: number;                         // Unique identifier for the report
    number_of_failed_tests: number;     // Number of failed tests
    number_of_passed_tests: number;     // Number of passed tests
    result_status: 'PASS' | 'FAIL';     // Result status, limited to 'PASS' or 'FAIL'
    skipped: number;                    // Number of skipped tests
    test_suite_name: string;            // Name of the test suite
    tests: ITest[];                      // Array of tests
    timestamp: string;                  // Timestamp of the report
    total_time: string;                 // Total time taken for all tests
  }