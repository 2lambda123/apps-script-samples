/**
 * Copyright Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Tests createTimeDrivenTrigger function of trigger.gs
 */
function itShouldCreateTimeDrivenTriggers() {
  console.log('> itShouldCreateTimeDrivenTriggers');
  createTimeDrivenTriggers();
}

/**
 * Tests createSpreadsheetOpenTrigger function of triggers.gs
 */
function itShouldCreateSpreadsheetOpenTrigger() {
  console.log('> itShouldCreateSpreadsheetOpenTrigger');
  createSpreadsheetOpenTrigger();
}

/**
 * Tests deleteTrigger function of triggers.gs
 */
function itShouldDeleteTrigger() {
  console.log('> itShouldDeleteTrigger');
  deleteTrigger();
}

/**
 * Run all the tests for triggers.gs
 */
function RUN_ALL_TESTS() {
  itShouldCreateSpreadsheetOpenTrigger();
  itShouldCreateTimeDrivenTriggers();
  itShouldDeleteTrigger();
}
